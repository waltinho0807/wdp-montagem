import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import connectDb from '../../utils/connectDb';
import User from '../../models/User';
import Cart from '../../models/Cart';

connectDb();

export default async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // check email, name, password format
        if (!isLength(name, {min: 3, max: 15})) {
            return res.status(422).send("Nome de 3-10 caracteres");
        } else if (!isLength(password, {min: 5, max: 15})){
            return res.status(422).send("Password entre 5-15 caracteres");
        } else if (!isEmail(email)){
            return res.status(422).send("Email deve ser valido");
        }

        const user = await User.findOne({ email });
        if (user){
            return res.status(422).send(`Usuario já existe ${email}`);
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = await new User({
            name,
            email,
            password: passwordHash
        }).save();
        // console.log({newUser});
        // create a cart for the new user
        await new Cart({ user: newUser._id }).save();

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.status(201).json(token);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao cadastrar por favor tente novamente.");
    }
}

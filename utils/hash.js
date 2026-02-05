import bcrypt from 'bcryptjs'

export const hashpassword = async (password) => {
    const salt = await bcrypt.gensalt(10);
    return await bcrypt.hash(password, salt);

}

export const passwordCheck = async (password, hashpassword) => {
    return await bcrypt.compare(password, hashpassword);
}
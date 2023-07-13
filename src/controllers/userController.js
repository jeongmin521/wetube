import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" } );

export const postJoin = async(req, res) => {
    const { name, username, email, password, location } = req.body;
    const pageTitle = "Join";
    const usernameExists = await User.exists({ username });
    if(usernameExists){
        return res.render("join", { 
            pageTitle,
            errorMessage: " This username is already taken.",
        });
    }
    const emailExists = await User.exists({ email });
    if(emailExists){
        return res.render("join", {
            pageTitle,
            errorMessage: "This email is already taken."
        });
    }
    await User.create({
        name,
        username,
        email,
        password,
        location,
    });
    return res.redirect("/login"); //계정을 생성하면 로그인 페이지로 이동
};

export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");
export const see = (req, res) => res.send("See User");
import Video from "../models/Video";

export const home = async(req, res) => {
    const videos = await Video.find({});
    return res.render("home", { pageTitle:"Home", videos });
};

export const watch = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    console.log(video);
    return res.render("watch", {pageTitle: `watching`, video });
};

export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("edit", { pageTitle: `Editing` });
}; //form을 화면에 보여줌

export const postEdit = (req, res) => {
    const { id } = req.params; //req.param에서 id를 얻고
    const { title } = req.body; //form 에서 오는 body에서 title얻고
    videos[id-1].title = title; //업데이트하기
    return res.redirect(`/videos/${id}`);
}; //변경사항을 저장

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "Upload Video"});
};

export const postUpload = async (req, res ) => {
    const { title, description, hashtags } = req.body;
    try{
        await Video.create({
            title,
            description,
            createdAt: Date.now(),
            hashtags: hashtags.split(",").map((word) => `#${word}`),
        });
        return res.redirect("/");
    }catch (error){
        return res.render("upload", {
            pageTitle: "Upload Video",
            errorMessage: error._message,
        });
    }
};
let videos = [{
    title:"First Video",
    rating: 5,
    comments:2,
    createdAt:"2 minutes ago",
    views:1,
    id:1,
},
{
    title:"Second Video",
    rating: 3,
    comments:5,
    createdAt:"10 minutes ago",
    views:80,
    id:2,
},
{
    title:"Third Video",
    rating: 1,
    comments:20,
    createdAt:"50 minutes ago",
    views:100,
    id:3,
},
];

export const trending = (req, res) => {
    return res.render("home", { pageTitle:"home", videos });
};
export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("watch", {pageTitle: `watching ${video.title}`, video });
};

export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
}; //form을 화면에 보여줌

export const postEdit = (req, res) => {
    const { id } = req.params; //req.param에서 id를 얻고
    const { title } = req.body; //form 에서 오는 body에서 title얻고
    videos[id-1].title = title; //업데이트하기
    return res.redirect(`/videos/${id}`);
}; //변경사항을 저장
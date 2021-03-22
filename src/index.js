import React from "react";
import ReactDOM from "react-dom";
import 'minireset.css'
import "./index.css";
import App from "./App";

const posts = [
    {
        title: "Next.js 9.4 Fast RefreshとIncremental Static Regenerationなどのアップデート",
        date: "2020.10.23",
        url: "https://qiita.com",
    },
    {
        title: "Next.js 9.3: 新世代の静的サイト生成、 Built-in Sass のサポート",
        date: "2020.03.10",
        url: "https://qiita.com",
    },
    {
        title: "Serverless Next.js を Cloud Functions にデプロイする",
        date: "2019.04.28",
        url: "https://qiita.com"
    },
];

const works = [
    {
        title: "『執筆 DAYS 』 リニューアル",
        roles: ["WordPress", "React"],
        imageUrl: "/Work.png",
    },
    {
        title: " 『締め切り TU-RYDAY 』公式サイト ",
        roles: ["React", "Gatsby", "Figma"],
        imageUrl: "/work.png",
    },
    {
        title: " 『ブルーバードコミックス』サービスサイト ",
        roles: ["React", "Next.js"],
        imageUrl: "/work.png",
    },
];

ReactDOM.render(
    <App posts={posts} works={works}/>,
    document.getElementById("root")
);

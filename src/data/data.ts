import { category } from "./category";
export interface Anime {
    id: number;
    name: string;
    description: string;
    cover: string;
    categorys: string[];
    temporadas: number;
    episodios: number;
    peliculas: number;
}
export const Animes: Anime[] = [
    {
        id: 1,
        name: "Musoku Tensei Jobless Reencarnation",
        description: "The series is about a jobless overweight man who dies after having a withdrawn life and reincarnates in a fantasy world while keeping his memories of his previous life, determined to enjoy his new life without regrets under the name Rudeus Greyrat.",
        categorys: [category.isekai, category.adventure],
        cover: "https://pbs.twimg.com/media/FT26DLcXoAM_D0t?format=jpg",
        temporadas: 2,
        episodios: 49,
        peliculas: 0
    },
    {
        id: 2,
        name: "Bocchi the Rock",
        description: "Extremely anxious and socially awkward Hitori Gotō longs to become a rock musician in spite of her struggles, while fulfilling her desires to one day make friends. She is suddenly given a chance to do so after she is taken in by another girl, Nijika Ijichi, to become a member of her newly formed Kessoku Band.",
        categorys: [category.slice_of_life, category.comedy],
        cover: "https://pbs.twimg.com/media/GJjQWksWcAA8pXw?format=png",
        temporadas: 1,
        episodios: 12,
        peliculas: 1
    },
    {
        id: 3,
        name: "Naruto",
        description: "It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
        categorys: [category.shounen],
        cover: "https://cdns-images.dzcdn.net/images/cover/f62f9482bbf389319a769abb56d10b98/500x500.jpg",
        temporadas: 27,
        episodios: 720,
        peliculas: 11
    },
    {
        id: 4,
        name: "K-On",
        description: "Is a history about 5 high school girls who become friends through the Light Music Club.",
        categorys: [category.comedy, category.slice_of_life],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8b/98/f1/8b98f1ee-35d8-ed70-37a2-7e17a056e619/mzi.xuqupvks.jpg/1200x1200bf-60.jpg",
        temporadas: 2,
        episodios: 39,
        peliculas: 0
    },
    {
        id: 5,
        name: "Jujutsu Kaisen",
        description: "The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, to whom Yuji becomes the host.",
        categorys: [category.shounen],
        cover: "https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
        temporadas: 3,
        episodios: 47,
        peliculas: 1
    },
    {
        id: 6,
        name: "Horimiya",
        description: "Centers on the love story of two high school students Kyouko Hori and Izumi Miyamura. Kyouko is a popular, smart, and cheerful person, while Izumi is viewed as a bit of a distant, gloomy geek by his classmates.",
        categorys: [category.comedy,category.romance, category.slice_of_life],
        cover: "https://static.wikia.nocookie.net/doblaje/images/9/9e/Horimiya_-_Poster.jpg/revision/latest?cb=20210810165454&path-prefix=es",
        temporadas: 2,
        episodios: 30,
        peliculas: 0
    },
    {
        id: 7,
        name: "Blue Lock",
        description: "High school soccer players from across Japan gather for a controversial project designed to create the best and most egoistic striker in the world.",
        categorys: [category.sports, category.shounen],
        cover: "https://m.media-amazon.com/images/M/MV5BZjllODBiN2MtOWQzYS00ZDRlLTk5NzMtOGMyYmUzNzU1YjZkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        temporadas: 1,
        episodios: 24,
        peliculas: 0
    },
    {
        id: 8,
        name: "Given",
        description: "The series follows a group of four students in an amateur rock band and the dual romantic relationships that form among them: between electric guitarist Ritsuka Uenoyama and vocalist Mafuyu Satō, and between bassist Haruki Nakayama and drummer Akihiko Kaji.",
        categorys: [category.drama, category.romance],
        cover: "https://static.wikia.nocookie.net/given/images/b/b7/Anime_Poster.jpg/revision/latest?cb=20201121210250",
        temporadas: 1,
        episodios: 11,
        peliculas: 1
    },
    {
        id: 9,
        name: "Haikyuu",
        description: "Is a volleyball themed anime series about Shoyo Hinata a kid who loves volleyball. Hinata is starting at Karasuno High School and joins their team. As fate would have it, his middle school volleyball rival, Tobio Kageyama also joins.",
        categorys: [category.sports, category.comedy, category.shounen],
        cover: "https://m.media-amazon.com/images/I/71PbOGKldmS._AC_UF894,1000_QL80_.jpg",
        temporadas: 4,
        episodios: 85,
        peliculas: 4
    },
    {
        id: 10,
        name: "Sousou no Frieren",
        description: "The story follows elven mage Frieren, a former member of the party of adventurers who defeated the Demon King and restored harmony to the world after a ten-year quest. In the past, the heroic group included Frieren, human hero Himmel, dwarven warrior Eisen, and human priest Heiter.",
        categorys: [category.adventure],
        cover: "https://m.media-amazon.com/images/M/MV5BMjVjZGU5ZTktYTZiNC00N2Q1LThiZjMtMDVmZDljN2I3ZWIwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        temporadas: 1,
        episodios: 28,
        peliculas: 0
    }
]
export interface Character {
    id: number;
    animeId: number;
    face: string;
    name: string;
}
export const Characters: Character[] = [
    {
        id: 1,
        animeId: 1,
        face: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9268ed26-54f3-488e-b0e0-f8fb58b2c6e6/37c8012f2f75caf85df18a58eda6f05ea2302e3b8ee88c7c99746c4383a9a3cb_autismmixSDXL_autismmixPony.jpeg",
        name: "Rudeus Greyrat",
    },
    {
        id: 2,
        animeId: 1,
        face: "https://images-ng.pixai.art/images/orig/cab2d0d1-0c42-4b6f-a0cc-105d524da81a",
        name: "Paul Greyrat",
    },
    {
        id: 3,
        animeId: 1,
        face: "https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/2d980ff2-a0ab-434e-bafe-ac32c7e87e00/avatarhd",
        name: "Zenith Greyrat",
    },
    {
        id: 4,
        animeId: 1,
        face: "https://boo-prod.b-cdn.net/database/profiles/169166205572419e2214177a61d9aac65fd109db6951f.jpg",
        name: "Roxy Migurdia",
    },
    {
        id: 5,
        animeId: 1,
        face: "https://images-ng.pixai.art/images/orig/33f86906-4cfa-432f-b93e-45aa6048401c",
        name: "Sylphiette",
    },
    {
        id: 6,
        animeId: 1,
        face: "https://i.pinimg.com/736x/9a/70/70/9a7070ebad49124d3cd8069465bfa9b7.jpg",
        name: "Eris Boreas Greyrat",
    },
    {
        id: 7,
        animeId: 2,
        face: "https://images-ng.pixai.art/images/orig/77785842-6392-4615-83cd-6005924760b9",
        name: "Hitori Gotou",
    },
    {
        id: 8,
        animeId: 2,
        face: "https://a.storyblok.com/f/178900/960x540/60cb3819e2/bocchi-the-rock-episode-3.png",
        name: "Nijika Ijichi",
    },
    {
        id: 9,
        animeId: 2,
        face: "https://i.pinimg.com/736x/a5/e8/b6/a5e8b6a5a3c10984deeb97e1a5dab46a.jpg",
        name: "Ryu Yamada",
    },
    {
        id: 10,
        animeId: 2,
        face: "https://cdn.myanimelist.net/images/characters/4/493790.jpg",
        name: "Kita Ikuyo",
    },
    {
        id: 11,
        animeId: 3,
        face: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDryp3aIL-Ns_sT-fGFwtYdUGx-ax2IGIOqA&s",
        name: "Naruto Uzumaki",
    },
    {
        id: 12,
        animeId: 3,
        face: "https://static.wikia.nocookie.net/naruto/images/3/3d/Sasuke_durante_su_ni%C3%B1ez.png/revision/latest?cb=20120606175210&path-prefix=es",
        name: "Sasuke Uchiha",
    },
    {
        id: 13,
        animeId: 3,
        face: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgt9VF7Ca9CIEAAhkTHaatRI05KNQjHLwnYA&s",
        name: "Haruno Sakura",
    },
    {
        id: 14,
        animeId: 3,
        face: "https://static.wikia.nocookie.net/naruto/images/2/2e/Kakashi_Hatake_Parte_I_y_II_Anime.png/revision/latest?cb=20221120050147&path-prefix=es",
        name: "Kakashi Hatake",
    },
    {
        id: 15,
        animeId: 3,
        face: "https://static.wikia.nocookie.net/narutoinuyashapokemnyharrypotter/images/4/42/Profile_Jiraiya.png/revision/latest?cb=20121228200941&path-prefix=es",
        name: "Jiraya",
    },
    {
        id: 16,
        animeId: 4,
        face: "https://static.wikia.nocookie.net/k-on/images/4/4b/Yui_Hirasawa_new_mugshot.png/revision/latest?cb=20130713163129",
        name: "Yui Hirasawa",
    },
    {
        id: 17,
        animeId: 4,
        face: "https://thicc-af.mywaifulist.moe/pending/waifus/zSJUUm6zKtMZfq69NK6QMZG92KuxV1dTXc2LRzxy.jpg",
        name: "Mio Akiyama",
    },
    {
        id: 18,
        animeId: 4,
        face: "https://static.wikia.nocookie.net/k-on/images/4/40/Ritsu_Tainaka_new_mugshot.png/revision/latest?cb=20130713163002",
        name: "Ritsu Tainaka",
    },
    {
        id: 19,
        animeId: 4,
        face: "https://i.pinimg.com/474x/b3/bf/7b/b3bf7b2e6b72a998e5297e7e293d2e45.jpg",
        name: "Tsumugi Kotobuki",
    },
    {
        id: 20,
        animeId: 4,
        face: "https://boo-prod.b-cdn.net/database/profiles/16961699521322f73b8221ebc0f8b60c98831328697e5.png",
        name: "Azusa Nakano",
    },
    {
        id: 21,
        animeId: 5,
        face: "https://i.pinimg.com/originals/ec/61/c9/ec61c93e2343cde401e73c5272ca3cd0.jpg",
        name: "Yūji Itadori",
    },
    {
        id: 22,
        animeId: 5,
        face: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/a/a2/Satoru_Gojo_-_Anime.jpg/revision/latest?cb=20201017190313&path-prefix=es",
        name: "Satoru Gojō",
    },
    {
        id: 23,
        animeId: 5,
        face: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/8/83/Megumi_Fushiguro_-_Anime.jpg/revision/latest?cb=20201009215353&path-prefix=es",
        name: "Megumi Fushiguro",
    },
    {
        id: 24,
        animeId: 5,
        face: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/1/1f/Nobara_Kugisaki_-_Anime.jpg/revision/latest?cb=20201022190210&path-prefix=es",
        name: "Nobara Kugisaki",
    },
    {
        id: 25,
        animeId: 6,
        face: "https://i.pinimg.com/474x/7b/e7/11/7be711b491e34772eede5dfc6d580ec7.jpg",
        name: "Izumi Miyamura",
    },
    {
        id: 26,
        animeId: 6,
        face: "https://i.pinimg.com/736x/99/d6/d7/99d6d7b73ac3a5b3485492886c84f6d5.jpg",
        name: "Kyoko Hori",
    },
    {
        id: 27,
        animeId: 7,
        face: "https://static.wikia.nocookie.net/bluelock/images/3/3f/Yoichi_Isagi_Anime.png/revision/latest?cb=20230303223455&path-prefix=es",
        name: "Yoichi Isagi",
    },
    {
        id: 28,
        animeId: 7,
        face: "https://static.wikia.nocookie.net/universal-warriors/images/5/5d/444142.jpg/revision/latest?cb=20230515095905",
        name: "Meguru Bachira",
    },
    {
        id: 29,
        animeId: 7,
        face: "https://static.wikia.nocookie.net/bluelock/images/3/3f/Seishiro_Nagi_Anime.png/revision/latest?cb=20230310040557&path-prefix=es",
        name: "Seishiro Nagi",
    },
    {
        id: 30,
        animeId: 7,
        face: "https://i.pinimg.com/originals/fb/3b/0c/fb3b0c68c6340e55e4265e94d1465eb9.jpg",
        name: "Rin Itoshi",
    },
    {
        id: 31,
        animeId: 7,
        face: "https://i.pinimg.com/736x/60/08/85/600885c818ae1aefb75eb88a04d2ef45.jpg",
        name: "Jinpachi Ego",
    },
    {
        id: 32,
        animeId: 8,
        face: "https://static.wikia.nocookie.net/given/images/3/31/Ritsuka_%28animaci%C3%B3n%29.png/revision/latest?cb=20200823192451&path-prefix=es",
        name: "Ritsuka Uenoyama",
    },
    {
        id: 33,
        animeId: 8,
        face: "https://static.wikia.nocookie.net/given/images/2/24/Mafuyu_%28animaci%C3%B3n%29.png/revision/latest?cb=20200912142232&path-prefix=es",
        name: "Mafuyu Sato",
    },
    {
        id: 34,
        animeId: 8,
        face: "https://static.wikia.nocookie.net/given/images/6/6c/Haruki_%28animaci%C3%B3n%29.jpg/revision/latest?cb=20200907233601&path-prefix=es",
        name: "Haruki Nakayama",
    },
    {
        id: 35,
        animeId: 8,
        face: "https://pm1.aminoapps.com/7747/000d8f594f3a9ce92b69cb64a737c2d562b4b691r1-350-490v2_00.jpg",
        name: "Akihiko",
    },
    {
        id: 36,
        animeId: 9,
        face: "https://static.wikia.nocookie.net/haikyuu/images/c/c2/Rostro_de_Hinata.png/revision/latest?cb=20160210050706&path-prefix=es",
        name: "Shōyō Hinata",
    },
    {
        id: 37,
        animeId: 9,
        face: "https://boo-prod.b-cdn.net/database/profiles/16967663630137d37692c68b0f2505a35898dbdcc222b.jpg",
        name: "Tobio Kageyama",
    },
    {
        id: 38,
        animeId: 9,
        face: "https://i.pinimg.com/736x/72/2f/7c/722f7c6f3c27b3757e240f31e270c844.jpg",
        name: "Kei Tsukishima",
    },
    {
        id: 39,
        animeId: 9,
        face: "https://i.pinimg.com/474x/d5/f3/c6/d5f3c6aa4636d1222c5bc6fb7983c0fd.jpg",
        name: "Toru Oikawa",
    },
    {
        id: 40,
        animeId: 10,
        face: "https://www.animeunited.com.br/oomtumtu/2023/12/portada_sousou-no-frieren-37.jpg",
        name: "Frieren",
    },
    {
        id: 41,
        animeId: 10,
        face: "https://i.pinimg.com/originals/cf/11/6b/cf116bb27dc06def2a72d397f2e054ed.jpg",
        name: "Fern",
    },
    {
        id: 42,
        animeId: 10,
        face: "https://i.pinimg.com/736x/28/36/b4/2836b44460ce9642ba263290acea71dc.jpg",
        name: "Himmel",
    },
    {
        id: 43,
        animeId: 10,
        face: "https://cdn.oneesports.gg/cdn-data/2024/03/How_old_is_Stark_Frieren_A_Journeys_End_Anime.jpg",
        name: "Stark",
    }
]
import react from "react";

export const NavbarItems = () => {
    const navbar = [
        {
            icon: "https://cdn.lordicon.com/cnpvyndp.json",
            path: '/',

        },
        {
            icon: "https://cdn.lordicon.com/whrxobsb.json",
            path: '/analytics',
        },
        {
            icon: "https://cdn.lordicon.com/zrtfxghu.json",
            path: '/files',
        },
        {
            icon: "https://cdn.lordicon.com/ciawvzjk.json",
            path: "/wallet",
        },
        {
            icon: "https://cdn.lordicon.com/pflszboa.json",
            path: '/orders',
        }
    ]

    return navbar
}

export const headerItems = () => {
    const headers = [
        {
            icon: <lord-icon
                src="https://cdn.lordicon.com/xtnsvhie.json"
                trigger="hover"
                state="morph-book"
                target="#DatabaseProducts"
                colors="primary:#ffffff"
                style={{ width: "24px", height: "24px" }}>
            </lord-icon>,
            title: "Email"
        },
        {
            icon: <lord-icon
                src="https://cdn.lordicon.com/lecprnjb.json"
                trigger="hover"
                state="morph-book"
                target="#DatabaseProducts"
                colors="primary:#ffffff"
                style={{ width: "24px", height: "24px" }}>
            </lord-icon>,
            title: "Settings",

        },
        {
            icon: <lord-icon
                src="https://cdn.lordicon.com/vspbqszr.json"
                trigger="hover"
                target="#Collections"
                state="morph-home-2"
                colors="primary:#ffffff"
                style={{ width: "24px", height: "24px" }}>
            </lord-icon>,
            title: "Notifications"
        }
    ]

    return headers
}

export const firstSlice = () => {

    const cardData = [
        {
            icon: <i class="fa-solid fa-bag-shopping" style={{ "color": "#74C0FC" }}></i>,
            title: 'Total Orders',
            count: '75',
            percent: '3%',
            ratio: false,
            arrow: <i class="fa-solid fa-caret-up"></i>
        },
        {
            icon: <i class="fa-solid fa-cart-shopping" style={{ "color": "#63E6BE" }} i></i>,
            title: 'Total Deliveried',
            count: '70',
            percent: '3%',
            ratio: true,
            arrow: <i class="fa-solid fa-caret-down"></i>
        },
        {
            icon: <i class="fa-solid fa-cart-shopping" style={{ "color": "#f711d" }}></i>,
            title: 'Total Cancelled',
            count: '05',
            percent: '3%',
            ratio: false,
            arrow: <i class="fa-solid fa-caret-up"></i>
        },
        {
            icon: <i class="fa-solid fa-ranking-star" style={{ "color": "#B197FC" }}></i>,
            title: 'Total Revenue',
            count: '$12K',
            percent: '3%',
            ratio: true,
            arrow: <i class="fa-solid fa-caret-down"></i>
        },
    ]
    return cardData;
}


export const customerList = () => {

    const dataItems = [
        {
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
            name: "Jonny Wilson",
            ratedStar: [1, 2, 3, 4],
            notRated: [1],
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
            name: "Dianne Russell",
            ratedStar: [1, 2, 3, 4, 5],
            notRated: [],
            review: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
            name: "Devan Lane",
            ratedStar: [1, 2, 3],
            notRated: [1, 2],
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
            name: "Jonny Wilson",
            ratedStar: [1, 2, 3, 4],
            notRated: [1],
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
            name: "Dianne Russell",
            ratedStar: [1, 2, 3, 4, 5],
            notRated: [],
            review: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
            name: "Devan Lane",
            ratedStar: [1, 2, 3],
            notRated: [1, 2],
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]

    return dataItems;
}
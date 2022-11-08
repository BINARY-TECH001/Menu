const c = console.log.bind(document);

const menu = [
    {
        id: 1,
        title: "Hamburger",
        category: "breakfast",
        price: 23,
        img: "./assets/dish-1.png",
        desc: "I'm baby woke mlkjg wolf biters kdfjvnsd jsfd coprrggh used dghtt",
    },

    {
        id: 2,
        title: "Burger",
        price: 53,
        category: "lunch",
        img: "./assets/dish-2.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim nobis est quod rem consectetur dolore exercitationem vel veritatis? Sint.",
    },
    {
        id: 3,
        title: "Chicken",
        price: 23,
        category: "shakes",
        img: "./assets/dish-3.png",
        desc: "I'm baby woke mlkjg wolf biters kdfjvnsd jsfd coprrggh used dghtt Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim nobis est quod rem consectetur dolore exercitationem vel veritatis? Sint.",
    },
    {
        id: 4,
        title: "Pizza",
        price: 50,
        category: "breakfast",
        img: "./assets/dish-4.png",
        desc: "I'm baby woke mlkjg wolf biters kdfjvnsd jsfd coprrggh used dghtt Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim nobis est quod rem consectetur dolore exercitationem vel veritatis? Sint.",
    },
    {
        id: 5,
        title: "Ice Cream",
        price: 54,
        category: "lunch",
        img: "./assets/dish-5.png",
        desc: "I'm baby woke mlkjg wolf biters kdfjvnsd jsfd coprrggh used dghtt Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim nobis est quod rem consectetur dolore exercitationem vel veritatis? Sint.",
    },
    {
        id: 6,
        title: "Fried Chicken",
        price: 30,
        category: "shakes",
        img: "./assets/dish-6.png",
        desc: "I'm baby woke mlkjg wolf biters kdfjvnsd jsfd coprrggh used dghtt Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim nobis est quod rem consectetur dolore exercitationem vel veritatis? Sint.",
    },
    {
        id: 7,
        title: "Ogbono",
        price: 22,
        category: "breakfast",
        img: "./assets/dish-7.jpg",
        desc: "I'm baby woke mlkjg wolf biters kdfjvnsd jsfd coprrggh used dghtt Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim nobis est quod rem consectetur dolore exercitationem vel veritatis? Sint.",
    },
    {
        id: 8,
        title: "Afang Soup",
        price: 73,
        category: "lunch",
        img: "./assets/dish-8.jpg",
        desc: "I'm baby woke mlkjg wolf biters kdfjvnsd jsfd coprrggh used dghtt Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim nobis est quod rem consectetur dolore exercitationem vel veritatis? Sint.",
    },
    {
        id: 9,
        title: "Efo Riro",
        price: 32,
        category: "shakes",
        img: "./assets/dish-9.jpg",
        desc: "I'm baby woke mlkjg wolf biters kdfjvnsd jsfd coprrggh used dghtt Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim nobis est quod rem consectetur dolore exercitationem vel veritatis? Sint.",
    },
    {
        id: 10,
        title: "Osiki Soup",
        price: 67,
        category: "lunch",
        img: "./assets/dish-10.jpg",
        desc: "I'm baby woke mlkjg wolf biters kdfjvnsd jsfd coprrggh used dghtt Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim nobis est quod rem consectetur dolore exercitationem vel veritatis? Sint.",
    },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");



// load items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    displayMenuButtons();
});



function displayMenuItems(menuItems){
        let displayMenu = menuItems.map((item) =>{
        return ` 
        <article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}>

            <div class="item-info">
                <header>
                    <h4> ${item.title} </h4>
                    <h4 class="price"> $${item.price} </h4>
                </header>
                <p class="item-text">
                   ${item.desc}
                </p>
            </div>
        </article>
        `;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, ["all"]);
    
    const categoryBtns = categories.map(function(category){
        return `
        <button type="button" id="filter-btn" data-id=${category}>
          ${category}
        </button>
        `
    }).join('');
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll("#filter-btn");

    // filter items
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", (e)=>{
            const category = e.currentTarget.dataset.id;
            c(category);
            const MenuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category){
                return menuItem;
            }
        });
        if(category === 'all'){
            displayMenuItems(menu);
        }else{
            displayMenuItems(MenuCategory);
        }
    })
})
};
    // <button class=${category} id="filter-btn" type="button" data-
    // id=${category}> ${category} </button>
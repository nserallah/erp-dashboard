
const products = [
    {
        img: require("@/assets/images/products/iphone-1.jpg"),
        title: "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
        brand:'apple',
        productPrice: 50,
        discount: "20% off",
        badgeColor: "badge-info",
        category: "Mobile"
    },
    {
        img: require("@/assets/images/products/headphone-1.jpg"),
        title: "Portable Speaker with HD Sound",
        brand:'samsung',
        productPrice: 500,
        discount: "sale",
        badgeColor: "badge-primary",
        category: "Speaker"
    },
    {
        img: require("@/assets/images/products/speaker-1.jpg"),
        title: "Lightweight On-Ear Headphones - Black",
        brand:'apple',
        productPrice: 50,
        discount: "40% ",
        badgeColor: "badge-danger",
        category: "Furniture"
    },
    {
        img: require("@/assets/images/products/speaker-2.jpg"),
        title: "Automatic-self-wind mens Watch 5102PR-001 (Cert",
        brand:'LG',
        productPrice: 500,
        discount: "10% off",
        badgeColor: "badge-warning",
        category: "Watch"
    },
    {
        img: require("@/assets/images/products/headphone-2.jpg"),
        title: " Automatic-self-wind mens Watch 5102PR-001",
        brand:'sony',
        productPrice: 1000,
        discount: "4% off",
        badgeColor: "badge-info",
        category: "Watch"
    },
    {
        img: require("@/assets/images/products/watch-2.jpg"),
        title: "On-Ear Headphones - Black",
        brand:'sony',
        productPrice: 1000,
        discount: "20% off",
        badgeColor: "badge-primary",
        category: "Mobile"
    },
    {
        img: require("@/assets/images/products/iphone-1.jpg"),
        title: " In-Ear Headphone",
        brand:'sony',
        productPrice: 200,
        discount: "20% off",
        badgeColor: "badge-info",
        category: "Speaker"
    },
    {
        img: require("@/assets/images/products/headphone-1.jpg"),
        title: "Duis exercitation nostrud anim",
        brand:'samsung',
        productPrice: 7000,
        discount: "20% off",
        badgeColor: "badge-info",
        category: "Watch"
    },
    {
        img: require("@/assets/images/products/speaker-1.jpg"),
        title: " Lightweight On-Ear Headphones - Black",
        brand:'asus',
        productPrice: 200,
        discount: "20% off",
        badgeColor: "badge-info",
        category: "Mobile"
    },
    {
        img: require("@/assets/images/products/speaker-2.jpg"),
        title: " Automatic-self-wind mens Watch 5102PR-001 (Certified P",
        brand:'huawei',
        productPrice: 200,
        discount: "20% off",
        badgeColor: "badge-info",
        category: "Watch"
    },
    {
        img: require("@/assets/images/products/headphone-2.jpg"),
        title: "Automatic-self-wind mens Watch 5102PR-001",
        brand:'asus',
        productPrice: 500,
        discount: "20% off",
        badgeColor: "badge-info",
        category: "Furniture"
    },
    {
        img: require("@/assets/images/products/watch-2.jpg"),
        title: " On-Ear Headphones - Black",
        brand:'xiaomi',
        productPrice: 100,
        discount: "20% off",
        badgeColor: "badge-success",
        category: "Speaker"
    }
]
const state = {
    items: products,
    addToCart: '',
    ascOrder: '',
    filterProducts: products,
    brandFilter: '',
    filterData: '',
    orderBy: '',
    perPage: 12,
    currentPage: 1,
    pagesToShow: 3,
    brands: ["apple","huawei","sony","samsung","xiaomi","asus"],
    categories: ["Mobile" , "Speaker", "Furniture" , "Watch"]
   
}

const getters = {
    getFilterProducts:state => state.filterProducts,
    getItems: state => state.items,
    getCartItems: state => state.addToCart,
    getBrandsItem: state => state.brands,
    getCategoryItem: state => state.categories,
    brandsCount(state) {
        const counts = {};
        state.items.forEach(item => {
            counts[item.brand] = counts[item.brand] + 1 || 1;
        //    console.log(counts)
        });
           
        return counts;
       
    },    
}

const actions = {
    addCart({commit}, data){
        commit('ADD_CART', data)
    },
    addBrandToFilter({commit}, data){
        commit('ADD_BRAND_TO_FILTER', data)
    },
    addCategoryItem({commit},data){
        commit('ADD_BRAND_TO_CATEGORY', data)
    },
    removeBrandToFilter({commit}, data){
        commit('REMOVE_BRAND_FROM_FILTER', data)
    },
    ascendingOrderCart({commit}, data){
        commit('ASCENDING_ORDER_CART', data)
    },
    descendingOrderCart({commit}, data)
    {
        commit('DESCENDING_ORDER_CART', data)
    }
}

const mutations = {
    ADD_CART(state, data){
        state.items.push(data)
        state.addToCart = data;
        console.log(data)
    },
    ADD_BRAND_TO_FILTER (state, checkedArray) {
            
        state.filterProducts = state.items.filter( p => checkedArray.includes(p.brand) )
        if(state.filterProducts.length === 0){
            state.filterProducts = products
        }
       
    },
    ADD_BRAND_TO_CATEGORY (state , data) {
       state.filterProducts = state.items.filter( p => p.category == data)

        console.log( state.items.filter( p => p.category == data))

    },
    ASCENDING_ORDER_CART (state, data) {
        state.items.sort((a, b) => a.productPrice - b.productPrice)
        console.log(state.items.sort((a, b) => a.productPrice - b.productPrice))
    },
    DESCENDING_ORDER_CART() {
        state.items.sort((a, b) => b.productPrice - a.productPrice)
        console.log(state.items.sort((a, b) => b.productPrice - a.productPrice))
    }
   
   
}


export default {
    state,
    getters,
    actions,
    mutations
}
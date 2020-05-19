export default {
    getters: {
        /**
         * get the origin instance Navigator
         *
         * @return {Window.navigator|Navigator}
         * @author Amr
         */
        getNavigator() {
            let navigator = window.navigator
            var _navigator = {};
            for (var i in navigator) _navigator[i] = navigator[i];
            return _navigator;
        }
    }
}
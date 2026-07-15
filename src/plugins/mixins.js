/**
 * Global mixins config file. Contains useful helper functions that will be used in the components when needed.
 */
export default {
    created() {
        this.isMobile;
    },
    methods: {
        /**
         * @returns boolean
         */
        isMobile() {
            return screen.width <= 768;
        }
    }
}

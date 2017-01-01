/**
 * Global mixin
 */
Vue.mixin({
    computed: {
        i18n: function () {
            return this.$store.state.i18n;
        }
    },

    methods: {
        get_random_id: function() {
            var min = 999999,
                max = 9999999999;

            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        warn: function (settings, callback) {
            settings = $.extend(true, {
                title: '',
                text: '',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d54e21',
                confirmButtonText: '',
                cancelButtonText: '',
            }, settings);

            swal(settings, callback);
        }
    }
});

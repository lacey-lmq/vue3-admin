import {defineStore} from "pinia";

export const useGlobe = defineStore("globe", {
    state: () => {
        const theme = localStorage.getItem('theme');
        const locale = localStorage.getItem('locale');
        const language = localStorage.getItem('language');

        return {
            theme: theme ? JSON.parse(theme) : "dark",
            language: language ? JSON.parse(language) : "选择语言",
            locale: locale ? JSON.parse(locale) : 'en'
        };
    },
    actions: {
        changeTheme(type: string) {
            this.theme = type
        },
        changeLang(type: string) {
            this.language = type
        },
        changeLocale(type: string) {
            this.locale = type
        }
    },
});

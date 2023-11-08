const AuthStack = {
    home: "step",
    login: "login",
    register: "register",
    forgetPassword: "forgetPassword"
}

const HomeStack = {
    tab: "Inicio",
    home: "home",
    store: "store",
    product: "product",
    shop: "shop",
    categories: "categories",
    seemore: "seemore",
    search: "search",
}

const ActivityStack = {
    tab: "Actividad",
    favorites: "Favorites",
}

const OffersStack = {
    tab: "Ofertas",
    offers: "Offers",
}

const PrivacyPolicyStack = {
    tab: "Política de privacidad",
}

const AccountStack = {
    tab: "Cuenta",
    account: "Account",
    paymentMethods: "Payment_methods",
}
const HelpStack = {
    tab: "Ayuda",
    help: "Help",
}

export const screen = {
    auth: AuthStack,
    home: HomeStack,
    activity: ActivityStack,
    offers: OffersStack,
    privacyPolicyStack: PrivacyPolicyStack,
    account: AccountStack,
    help: HelpStack,
}
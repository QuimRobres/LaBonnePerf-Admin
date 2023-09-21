<template>
    <div>
        <div class="header-container">
            <p>Nº {{ clientData.commandNumber }}</p>

            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
            </svg>
        </div>

        <div class="client-info-container">
            <div class="cordage-status-container">
                <CordageEnCours v-if="getUserOrders" :status="getUserOrders" />
            </div>

            <div class="flex-container negative-margin-bottom-20">
                <p class="font-bold">Client : </p>
                <p>{{ clientData.clientName }}</p>
            </div>
            <div class="flex-container negative-margin-top-5">
                <p class="font-bold">Abonnement : </p>
                <p>{{ clientData.subscription }}</p>
            </div>
            <p class="font-bold negative-margin-top-5">Adresse(s) de livraison :</p>

            <div class="diection-container">

                <div>
                    <div class="send-container negative-margin-top-14">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-to-left"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M10 12l10 0"></path>
                            <path d="M10 12l4 4"></path>
                            <path d="M10 12l4 -4"></path>
                            <path d="M4 4l0 16"></path>
                        </svg>
                        <p>Récupérer</p>
                    </div>
                    <div class="direction-name-container">
                        <p class="font-bold">{{ clientData.addressRecover.name }}</p> <svg
                            xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-filled"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                                stroke-width="0" fill="currentColor"></path>
                        </svg>
                    </div>
                    <p class="font-bold direction-text">{{ clientData.addressRecover.address }}</p>
                    <div class="flex-container">
                        <p class="font-bold direction-text">{{ clientData.addressRecover.city }}</p>
                        <p class="font-bold direction-text">{{ clientData.addressRecover.postalCode }}</p>
                    </div>
                    <div class="flex-container negative-margin-top-14">
                        <p>Dépôt : </p>
                        <p>{{ clientData.addressRecover.deposit }}</p>
                    </div>
                    <div class="flex-container negative-margin-top-14">
                        <p>Photo: </p>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-arrow-big-down-line-filled" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M9 5l-.117 .007a1 1 0 0 0 -.883 .993v4.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-4.999a1 1 0 0 0 -1 -1h-6z"
                                stroke-width="0" fill="currentColor"></path>
                            <path d="M15 2a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z"
                                stroke-width="0" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <div class="separator"></div>
                <div>
                    <div class="send-container">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-to-right"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 12l-10 0"></path>
                            <path d="M14 12l-4 4"></path>
                            <path d="M14 12l-4 -4"></path>
                            <path d="M20 4l0 16"></path>
                        </svg>
                        <p>Récupérer</p>
                    </div>
                    <div class="direction-name-container">
                        <p class="font-bold">{{ clientData.addressDeliver.name }}</p> <svg
                            xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-filled"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                                stroke-width="0" fill="currentColor"></path>
                        </svg>
                    </div>
                    <p class="font-bold direction-text">{{ clientData.addressDeliver.address }}</p>
                    <div class="flex-container">
                        <p class="font-bold direction-text">{{ clientData.addressDeliver.city }}</p>
                        <p class="font-bold direction-text">{{ clientData.addressDeliver.postalCode }}</p>
                    </div>
                    <div class="negative-margin-top-14">
                        <div class="flex-container ">
                            <p>Dépôt : </p>
                            <p>{{ clientData.addressDeliver.deposit }}</p>
                        </div>
                        <p class="negative-margin-top-14">{{ clientData.addressDeliver.depositName }}</p>

                    </div>
                    <div class="flex-container negative-margin-top-14">
                        <p>Photo: </p>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-arrow-big-down-line-filled" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M9 5l-.117 .007a1 1 0 0 0 -.883 .993v4.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-4.999a1 1 0 0 0 -1 -1h-6z"
                                stroke-width="0" fill="currentColor"></path>
                            <path d="M15 2a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z"
                                stroke-width="0" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="negative-margin-top-5">
                <p>Commentaire pour le cordeur</p>
                <TextArea :value="clientData.commentary" :onFormChange="handleCommentChange"></TextArea>
            </div>
        </div>
        <div class="raquette-container">
            <div class="navigation-div">
                <div @click="() => handleNavigationRaquettes('-')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg>
                </div>
                <p class="font-bold">Raquette {{ selectedRaquetteIndex + 1 }}</p>
                <div @click="() => handleNavigationRaquettes('+')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                </div>
            </div>
            <div class="item-info-container">
                <div class="table-flex-container">
                    <p class="font-bold">1</p>
                    <p>{{ selectedRaquette.type }}</p>
                </div>
                <div class="separator"></div>
                <div class="flex-container-between">
                    <div class="table-flex-container">
                        <p class="font-bold">2</p>
                        <div>
                            <p>{{ selectedRaquette.filamentType }}</p>
                            <p>{{ selectedRaquette.filamentName }}</p>
                        </div>

                    </div>
                    <p>{{ selectedRaquette.filamentPrice }} €</p>

                </div>
                <div class="separator"></div>
                <div class="table-flex-container">
                    <p class="font-bold">3</p>
                    <p>{{ selectedRaquette.tension }}</p>
                </div>
                <div class="separator"></div>
                <div class="table-flex-container">
                    <p class="font-bold">4</p>
                    <p>{{ selectedRaquette.noeuds }}</p>
                </div>
                <div class="separator"></div>
                <div class="flex-container-between">
                    <div class="table-flex-container">
                        <p class="font-bold">5</p>
                        <p>Logo</p>
                    </div>
                    <p class="font-bold">{{ selectedRaquette.logoPrice }} €</p>
                </div>
                <div class="separator"></div>
                <div class="flex-container-between">
                    <div class="table-flex-container">
                        <p class="font-bold">6</p>
                        <p>Grip vert</p>
                    </div>
                    <p class="font-bold">{{ selectedRaquette.gripPrice }} €</p>

                </div>
                <div class="separator"></div>
                <div class="flex-container-between">
                    <div>
                        <div>
                            <p>Livraison</p>
                            <p>{{ selectedRaquette.livraisonName }}</p>
                        </div>
                    </div>
                    <p class="font-bold">{{ selectedRaquette.livraisonPrice }} €</p>
                </div>
                <div class="separator"></div>
                <div class="flex-container-between">
                    <div>
                        <div>
                            <p>Abonnement:</p>
                        </div>
                    </div>
                    <p class="font-bold">{{ selectedRaquette.subscription }} €</p>
                </div>
                <div class="separator"></div>
                <div class="flex-container-between">
                    <div>
                        <div>
                            <p>Balles de tennis:</p>
                        </div>
                    </div>
                    <p class="font-bold">{{ selectedRaquette.balls }} €</p>
                </div>
                <div class="separator"></div>
                <div class="flex-container-between">
                    <div>
                        <div>
                            <p>Pose (par raquette) : {{ selectedRaquette.pose }}</p>
                        </div>
                    </div>
                    <p class="font-bold">{{ selectedRaquette.pose * 10 }} €</p>
                </div>
                <div class="thick-separator"></div>
                <div class="flex-container-between">
                    <div class="table-flex-container">
                        <p class="font-bold">Total</p>
                    </div>
                    <p class="font-bold">{{ selectedRaquette.total }} €</p>
                </div>
            </div>

        </div>
        <div>
            <div class="flex-container">
                <p class="font-bold font-size-14">Envoyer un e-mail</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round" transform="rotate(45)">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 14l11 -11"></path>
                    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
            </div>
            <div class="flex-container font-size-14 negative-margin-top-14">
                <p class="font-bold">Appeler</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                    </path>
                </svg>
            </div>

        </div>
    </div>
</template>

<script>
import TextArea from "../Inputs/TextArea.vue";
import CordageEnCours from "./CordageEnCours.vue";
export default {
    name: 'App',
    components: {
        TextArea, CordageEnCours
    },
    methods: {
        getUserOrders() {
            const orders = this.clientData.orders;
            const excludedStatuses = [
                "canceled",
                "returned",
                "partially_returned",
                "requires_action",
            ];

            for (let i = orders.length - 1; i >= 0; i--) {
                const order = orders[i];
                if (
                    !excludedStatuses.includes(order.fulfillment_status) &&
                    order.status === "pending"
                ) {
                    return order;
                }
            }

            return null;
        },
        handleCommentChange(e) {
            console.log('test kimo e', e)
            /* clientData.commentary = e */
        },
        handleNavigationRaquettes(symbol) {
            if (symbol === '+' && this.selectedRaquetteIndex < this.clientData.raquettes.length - 1) this.selectedRaquetteIndex += 1
            if (symbol === '-' && this.selectedRaquetteIndex !== 0) this.selectedRaquetteIndex -= 1

            this.selectedRaquette = this.clientData.raquettes[this.selectedRaquetteIndex]
        }
    },
    mounted() {
        this.selectedRaquette = this.clientData.raquettes[0]
    },
    data() {
        return {
            selectedRaquetteIndex: 0,
            selectedRaquette: {},
            clientData: {
                commandNumber: '7851354',
                clientName: 'M. LAMY Jérémy',
                subscription: 'non',
                addressRecover: {
                    name: 'Tennis Club du Grand Versailles',
                    address: '57 Rue Rémont',
                    city: 'Versailles',
                    postalCode: '78000',
                    deposit: 'per le client',
                },
                addressDeliver: {
                    name: 'Picard',
                    address: '67 Avenue du Général Leclerc',
                    city: 'Boulogne',
                    postalCode: '92000',
                    deposit: 'per autre',
                    depositName: 'Mme LEGRAND Martine'
                },
                commentary: 'Laisser des précisions pour le cordeur ',
                raquettes: [
                    {
                        type: 'Tennis',
                        filamentType: 'Monofilament',
                        filamentName: 'nom produit',
                        filamentPrice: 17,
                        tension: 'tension à 22kg',
                        noeuds: '4 nœuds',
                        logoPrice: 0,
                        gripPrice: 0,
                        livraisonName: 'Express A/R -40km*',
                        livraisonPrice: 12,
                        subscription: 0,
                        balls: 0,
                        pose: 2,
                        total: '31,50'

                    },
                    {
                        type: 'Tennis 2',
                        filamentType: 'Multifilament',
                        filamentName: 'nom produit',
                        filamentPrice: 32,
                        tension: 'tension à 22kg',
                        noeuds: '4 nœuds',
                        logoPrice: 0,
                        gripPrice: 0,
                        livraisonName: 'Express A/R -40km*',
                        livraisonPrice: 24,
                        subscription: 0,
                        balls: 0,
                        pose: 3,
                        total: '68.50'

                    }

                ],
                orders: [
                    {
                        object: "order",
                        id: "order_01HAVKTPERK8M8RVPME32HZTE6",
                        created_at: "2023-09-21T10:16:05.502Z",
                        updated_at: "2023-09-21T10:16:05.502Z",
                        status: "pending",
                        fulfillment_status: "not_fulfilled",
                        payment_status: "awaiting",
                        display_id: 14,
                        cart_id: "cart_01HAVKK85MCCXBZP6N5GH2ZPFA",
                        customer_id: "cus_01HARJT42V9K0MA7GFGEFFTMAX",
                        email: "joaquim.robres@siriondev.com",
                        billing_address_id: "addr_01HAVKM1Y04CDZ432KTG6Q3TGW",
                        shipping_address_id: "addr_01HAVKK85MMN6RCW0TN3WEJHGS",
                        region_id: "reg_01HA7X4K1CFQDJDCTK89ZY2JJZ",
                        currency_code: "eur",
                        tax_rate: null,
                        draft_order_id: null,
                        canceled_at: null,
                        metadata: {},
                        no_notification: null,
                        idempotency_key: null,
                        external_id: null,
                        sales_channel_id: "sc_01HA7M09YN8FXEGQSWRT2S5YT1",
                        items: [
                            {
                                id: "item_01HAVKK9JSFV20MS9SRB3GC02A",
                                created_at: "2023-09-21T10:12:03.197Z",
                                updated_at: "2023-09-21T10:16:05.502Z",
                                cart_id: "cart_01HAVKK85MCCXBZP6N5GH2ZPFA",
                                order_id: "order_01HAVKTPERK8M8RVPME32HZTE6",
                                swap_id: null,
                                claim_order_id: null,
                                original_item_id: null,
                                order_edit_id: null,
                                title: "Grip 2",
                                description: "Version 1",
                                thumbnail: "https://kingame.es/wp-content/uploads/2021/09/Que-cordaje-poner-a-mi-raqueta-de-tenis.jpg",
                                is_return: false,
                                is_giftcard: false,
                                should_merge: true,
                                allow_discounts: true,
                                has_shipping: false,
                                unit_price: 900,
                                variant_id: "variant_01HA7X4MN9GQ13BDG0BJDFN56G",
                                quantity: 1,
                                fulfilled_quantity: null,
                                returned_quantity: null,
                                shipped_quantity: null,
                                metadata: {}
                            },
                            {
                                id: "item_01HAVKK9A8GKB0KHMHH2G7BJFK",
                                created_at: "2023-09-21T10:12:02.957Z",
                                updated_at: "2023-09-21T10:16:05.502Z",
                                cart_id: "cart_01HAVKK85MCCXBZP6N5GH2ZPFA",
                                order_id: "order_01HAVKTPERK8M8RVPME32HZTE6",
                                swap_id: null,
                                claim_order_id: null,
                                original_item_id: null,
                                order_edit_id: null,
                                title: "Logo",
                                description: "Version 1",
                                thumbnail: "https://kingame.es/wp-content/uploads/2021/09/Que-cordaje-poner-a-mi-raqueta-de-tenis.jpg",
                                is_return: false,
                                is_giftcard: false,
                                should_merge: true,
                                allow_discounts: true,
                                has_shipping: false,
                                unit_price: 50,
                                variant_id: "variant_01HA7X4MZHV6BZ6TM7SSPRZFTK",
                                quantity: 1,
                                fulfilled_quantity: null,
                                returned_quantity: null,
                                shipped_quantity: null,
                                metadata: {}
                            },
                            {
                                id: "item_01HAVKKA2R5KYBB1JHBKEYTGDW",
                                created_at: "2023-09-21T10:12:03.756Z",
                                updated_at: "2023-09-21T10:16:05.502Z",
                                cart_id: "cart_01HAVKK85MCCXBZP6N5GH2ZPFA",
                                order_id: "order_01HAVKTPERK8M8RVPME32HZTE6",
                                swap_id: null,
                                claim_order_id: null,
                                original_item_id: null,
                                order_edit_id: null,
                                title: "pose",
                                description: "",
                                thumbnail: null,
                                is_return: false,
                                is_giftcard: false,
                                should_merge: true,
                                allow_discounts: true,
                                has_shipping: false,
                                unit_price: 1000,
                                variant_id: "variant_01HAP5Q361FZSH1ZMVG1AGGXC8",
                                quantity: 1,
                                fulfilled_quantity: null,
                                returned_quantity: null,
                                shipped_quantity: null,
                                metadata: {}
                            },
                            {
                                id: "item_01HAVKMCVNZ1988A3B2G8Z7A2F",
                                created_at: "2023-09-21T10:12:39.345Z",
                                updated_at: "2023-09-21T10:16:05.502Z",
                                cart_id: "cart_01HAVKK85MCCXBZP6N5GH2ZPFA",
                                order_id: "order_01HAVKTPERK8M8RVPME32HZTE6",
                                swap_id: null,
                                claim_order_id: null,
                                original_item_id: null,
                                order_edit_id: null,
                                title: "2 Lots de balles de tennis",
                                description: "Version 1",
                                thumbnail: "https://kingame.es/wp-content/uploads/2021/09/Que-cordaje-poner-a-mi-raqueta-de-tenis.jpg",
                                is_return: false,
                                is_giftcard: false,
                                should_merge: true,
                                allow_discounts: true,
                                has_shipping: false,
                                unit_price: 0,
                                variant_id: "variant_01HA7X4N0W1AH44JK0SQNHNR7W",
                                quantity: 1,
                                fulfilled_quantity: null,
                                returned_quantity: null,
                                shipped_quantity: null,
                                metadata: {}
                            },
                            {
                                id: "item_01HAVKK8WENKV53HRT3XWZPXWW",
                                created_at: "2023-09-21T10:12:02.313Z",
                                updated_at: "2023-09-21T10:16:05.502Z",
                                cart_id: "cart_01HAVKK85MCCXBZP6N5GH2ZPFA",
                                order_id: "order_01HAVKTPERK8M8RVPME32HZTE6",
                                swap_id: null,
                                claim_order_id: null,
                                original_item_id: null,
                                order_edit_id: null,
                                title: "Cordage Mono Tennis 1",
                                description: "Version 1",
                                thumbnail: "https://kingame.es/wp-content/uploads/2021/09/Que-cordaje-poner-a-mi-raqueta-de-tenis.jpg",
                                is_return: false,
                                is_giftcard: false,
                                should_merge: true,
                                allow_discounts: true,
                                has_shipping: false,
                                unit_price: 1350,
                                variant_id: "variant_01HA7X4KC4X5ZAVQ8S0AMWZE20",
                                quantity: 1,
                                fulfilled_quantity: null,
                                returned_quantity: null,
                                shipped_quantity: null,
                                metadata: {
                                    grip: "extraGrip1",
                                    logo: true,
                                    noeuds: "2",
                                    cordage: {
                                        id: "variant_01HA7X4KC4X5ZAVQ8S0AMWZE20",
                                        title: "Version 1",
                                        image_url: "https://kingame.es/wp-content/uploads/2021/09/Que-cordaje-poner-a-mi-raqueta-de-tenis.jpg",
                                        price_eur: 1350,
                                        price_usd: 2000,
                                        option_value: {
                                            id: "optval_01HA7X4KC42CYS752EKA3S7581",
                                            value: "1",
                                            metadata: null,
                                            option_id: "opt_01HA7X4KARBHYBD6F1PRQ0CJ7K",
                                            created_at: "2023-09-13T18:33:58.220Z",
                                            deleted_at: null,
                                            updated_at: "2023-09-13T18:33:58.220Z",
                                            variant_id: "variant_01HA7X4KC4X5ZAVQ8S0AMWZE20"
                                        },
                                        inventory_quantity: 994
                                    },
                                    hybride: false,
                                    surGrip: "grip2",
                                    tension: 25,
                                    gripSelected: {
                                        id: "variant_01HA7X4MN9GQ13BDG0BJDFN56G",
                                        title: "Version 1",
                                        image_url: "https://kingame.es/wp-content/uploads/2021/09/Que-cordaje-poner-a-mi-raqueta-de-tenis.jpg",
                                        price_eur: 900,
                                        price_usd: 1200,
                                        option_value: {
                                            id: "optval_01HA7X4MN954SMRF7Z53NDKP6N",
                                            value: "1",
                                            metadata: null,
                                            option_id: "opt_01HA7X4MMX5JGZVGMGDVXPC3YH",
                                            created_at: "2023-09-13T18:33:58.220Z",
                                            deleted_at: null,
                                            updated_at: "2023-09-13T18:33:58.220Z",
                                            variant_id: "variant_01HA7X4MN9GQ13BDG0BJDFN56G"
                                        },
                                        inventory_quantity: 996
                                    },
                                    raquetteType: "Tennis",
                                    purchaseNumber: 1,
                                    surGripSelected: ""
                                }
                            }
                        ]
                    }
                ],

            },

        }
    }

}
</script>

<style scoped>
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cordage-status-container {
    text-align: center;
    margin-bottom: 12px;
    ;
}

.header-container {
    font-size: 20px;
    font-weight: 600;
}

.font-size-14 {
    font-size: 14px;
}

.text-icon-container {
    margin-top: -18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
}

.send-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: -12px;
}

.direction-name-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.flex-container {
    display: flex;
    align-items: center;
    gap: 6px;
}

.table-flex-container {
    display: flex;
    gap: 6px;
}

.flex-container-between {
    display: flex;
    justify-content: space-between;

}

.negative-margin-top-5 {
    margin-top: -5px;
}

.negative-margin-top-14 {
    margin-top: -14px;
}

.negative-margin-bottom-20 {
    margin-bottom: -20px;
}

.font-bold {
    font-weight: 600
}

.direction-text {
    margin-top: -12px;
}

.separator {
    border: 1px solid black;
    margin: auto;
    border-radius: 12px;
}

.thick-separator {
    border: 2px solid black;
    margin: auto;
    border-radius: 12px;
}

.raquette-container {
    border: 1px solid black;
    border-radius: 12px;
    padding: 0px 6px;
}

.navigation-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}
</style>
import Home from '../components/HelloWorld.vue'
import Calendar from '../components/Calendar.vue'
import Input from '../components/Input.vue'
import Info from '../components/Info.vue'
import Table from '../components/Table.vue'

import Users from '../components/table/Users.vue'

// Komponen Kategori
import Kategori from '../components/table/Kategori.vue'
import KategoriList from '../view/kategori/List.vue'
import KategoriEdit from '../view/kategori/Edit.vue'

import Subkategori from '../components/table/Subkategori.vue'
import Tag from '../components/table/Tag.vue'
import Transaksi from '../components/table/Transaksi.vue'

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/ivent',
        component: Calendar
    },
    {
        path: '/form',
        component: Input
    },
    {
        path: '/info',
        component: Info
    },
    {
        path: '/table',
        component: Table,
        children: [{
                path: '/',
                component: Users
            },
            {
                path: 'kategori',
                component: Kategori,
                children: [{
                    path: '/',
                    component: KategoriList
                }, {
                    path: 'edit/:id',
                    component: KategoriEdit
                }]
            },
            {
                path: 'subkategori',
                component: Subkategori
            },
            {
                path: 'tag',
                component: Tag
            },
            {
                path: 'transaksi',
                component: Transaksi
            },
        ]
    }
]


export default routes
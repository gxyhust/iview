const routers = [
    {
        path: '/index',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/',
        meta: {
            title: 'upload'
        },
        component: (resolve) => require(['./views/upload.vue'], resolve)
    }
];
export default routers;
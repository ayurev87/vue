import MainPage from "@/pages/MainPage.vue"
import BlogPage from "@/pages/BlogPage.vue"
import ProjectPage from "@/pages/ProjectPage.vue"
import ProjectDetails from "@/components/ProjectDetails.vue"
import ErrorPage from "@/components/ErrorPage.vue"
import BlogDetails from "@/components/BlogDetails.vue"

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/main',
        component: MainPage,
    },
    {
        path: '/blog',
        component: BlogPage,
    },
    {
        path: '/project',
        component: ProjectPage,
    },
    {
        path: '/project/:page',
        component: ProjectPage,
    },
    {
        path: '/project-det',
        component: ProjectDetails,
    },
    {
        path: '/project-det/:somepage',
        component: ProjectDetails,
    },
    {
        path: '/blog-det',
        component: BlogDetails,
    },
    {
        path: '/*',
        component: ErrorPage,
    },
    

]

export default routes
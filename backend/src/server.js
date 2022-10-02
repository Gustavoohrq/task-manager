import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'

const app = express()

const adminJS = new AdminJs({
    databases: [],
    rootPath: 'admin',
    resources: []
})

const router = AdminJsExpress.buildRouter(adminJS)

app.user(adminJS.options.rootPath, router)
app.listen(5000, () => {
    console.log('AdminJS is under http://localhost:5000')
})
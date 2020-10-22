'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { status: 'online' }
})

Route.post('/sessions', 'SessionController.create')
Route.put('/sessions', 'SessionController.refreshToken')

Route.resource('/users', 'UserController').apiOnly().validator(new Map([
  [['users.store'], ['User']],
  [['users.update'], ['User']]
])).middleware(['auth:jwt'])

Route.resource('/clients', 'ClientController').apiOnly().middleware('auth:jwt')
Route.resource('/exercises', 'ExerciseController').apiOnly().middleware('auth:jwt')
Route.resource('/trainings', 'TrainingController').apiOnly().middleware('auth:jwt')
Route.resource('/products', 'ProductsController').apiOnly().middleware('auth:jwt')
Route.resource('/permissions', 'PermissionController').apiOnly().middleware('auth:jwt')
Route.resource('/roles', 'RoleController').apiOnly().middleware('auth:jwt')
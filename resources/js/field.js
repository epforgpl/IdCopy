import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-id-copy', IndexField)
  app.component('detail-id-copy', DetailField)
  app.component('form-id-copy', FormField)
})

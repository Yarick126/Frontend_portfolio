import renderService from '@/core/services/render.service'

import template from './book-me.template.html'
import styles from './book-me.module.scss'
import { BaseScreen } from '@/core/components/base-screen.component'
import { Heading } from '@/components/ui/heading/heading.component'


export class BookMe extends BaseScreen {

  constructor(){
    super({title:'Book me'})
  }

  render(){
    this.element = renderService.htmlToElement(template, [
      new Heading('Lets get in touch')
    ], styles)
    
    return this.element
  }
}
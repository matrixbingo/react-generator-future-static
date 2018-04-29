//import {fetch} from 'gfs-react-dm'
import TestModel from '../model/TestModel'
import {Control, fetch} from '../view/ea-react-dm/index'

@Control(TestModel)
export default class TestControl {

    static testSave() {
        return this.save('updateIndex', -1, this, (_this)=>{
            window.console.log('_this------->', _this)
        })
    }

    static queryBookTypes() {
        fetch('/test').then((data) => {
            this.update('books', data.data)
        })
    }

    static getBooks(index, bookList) {
        return this.update('books', bookList[index])
    }

    static updateBook(index, value) {
        this.update(`books.${index}`, value)
        this.update('updateIndex', -1)
    }

    static delBook(index) {
        return this.del(`books.${index}`, '', this, (_this)=>{
            window.console.log('_this------->', _this)
        })
    }

    static updateBookModel(key, value) {
        return this.update(key, value)
    }
}
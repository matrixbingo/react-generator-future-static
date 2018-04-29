import React, { Component } from 'react'

export default class Books extends Component{

    constructor(props){
        super(props)
    }

    checkUpdatePanel(index){
        //this.props.updateBook(index)
        if(index>=0){
            
            this.props.updateBookModel('book',this.props.books[index] )
        }
        this.props.updateBookModel('updateIndex',index )
    }
    onchange(key,e){
        this.props.updateBookModel(key,e.target.value )
    }

    getUpdatePanel(item){
        let index = this.props.testmodel.get('updateIndex')
        let book = this.props.testmodel.get('book').toJS()
        return (
            <table key={item.name}>
                <td><input className='test-input' onChange={this.onchange.bind(this,'book.name')} value={book.name} /></td>
                <td><input className='test-input' onChange={this.onchange.bind(this,'book.author')} value={book.author} /></td>
                <td><input className='test-input' onChange={this.onchange.bind(this,'book.press')} value={book.press} /></td>
                <td><input className='test-input' onChange={this.onchange.bind(this,'book.price')} value={book.price} /></td>
                <td><input className='test-input' onChange={this.onchange.bind(this,'book.date')} value={book.date} /></td>
                <td><input className='test-input' onChange={this.onchange.bind(this,'book.description')} value={book.description} /></td>
                <td><button onClick={()=>{
                    this.props.updateBook(index,book )
                }}>保存</button>  <button onClick={this.checkUpdatePanel.bind(this,-1)}>取消</button></td>
            </table>
        )
    }
    getDataPanel(item,index){

        return (
            <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.author}</td>
                <td>{item.press}</td>
                <td>{item.price}</td>
                <td>{item.date}</td>
                <td>{item.description || '无'}</td>
                <td><button onClick={this.props.delBook.bind(this,index)}>删除</button>  <button onClick={this.checkUpdatePanel.bind(this,index)}>修改</button></td>
            </tr>
        )  
    }

    render(){
        const updateIndex = this.props.testmodel.get('updateIndex')
        return (
            <table>
                <thead>
                <tr>
                    <th >书名</th>
                    <th >作者</th>
                    <th >出版社</th>
                    <th >价格</th>
                    <th >出版日期</th>
                    <th >简介</th>
                    <th  style={{ width:'15%'}}>操作</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.props.books.map((item,index)=>{
                            return updateIndex ===index ? this.getUpdatePanel(item ):this.getDataPanel(item,index)
                        })
                    }
                </tbody>
            </table>
        )
    }
}
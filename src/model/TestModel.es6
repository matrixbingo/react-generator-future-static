//import {Model} from 'gfs-react-dm'
import {Model} from '../view/ea-react-dm/index'
//import Immutable from 'immutable'

@Model('TestModel')
export default class TestModel {
    //此字段必须要有
    static __name = 'test'

    static bookTypes=[]
    static books=[
        {
            "name":"javascript高级程序设计（第三版）",
            "price":98,
            "description":"",
            "author":"Nicholas C. Zakas",
            "press":"人民邮电出版社",
            "date":"2012-3-1"
        },
        {
            "name":"javascript权威指南",
            "price":68,
            "description":"",
            "author":"弗兰纳根",
            "press":"机械工业出版社",
            "date":"2012-4-1"
        },
        {
            "name":"javascript权威指南",
            "price":68,
            "description":"",
            "author":"弗兰纳根",
            "press":"机械工业出版社",
            "date":"2012-4-1"
        }
    ]
    static book={}
    static updateIndex=-1

   /* static queryBookTypes(data, action){
        
        if(action.data){
            return data.merge(Immutable.fromJS(action.data) )
        }
    }
    static getBooks(data,action){
        return data.merge(Immutable.fromJS({books:action.data}) )
    }
    static updateBook(data,action){
        
        return data.setIn(['books',action.data.index],data.get('book') ).setIn(['updateIndex'],-1)
    }
    static delBook(data,action){
        
        return data.deleteIn(['books',action.data.index] )
    }*/
}
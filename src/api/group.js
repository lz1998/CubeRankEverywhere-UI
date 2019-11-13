import request from '@/utils/request'

export function login(username,password){
    let data=new FormData()
    data.append("username",username)
    data.append("password",password)
    return request({
        url:'/test',
        method:'get',
        data
    })
}




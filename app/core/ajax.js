import Url from './url';

class Ajax{
    onError(e){
    }
    resultVerify(res){
        console.log(res)
        if(!res.success){
            if(res.code && res.code === 302){
                //刷新页面 跳转登录页面
                location.href = location.href;
                throw(new Error("未登录"))
            }
            //Util.error(res.msg)
            throw(new Error(res.msg))
        }
    }
    
    get(url,data,autoError = true){
        let _data = data;
        let _param = data && Object.keys(data).length > 0 ? '?'+Url.param(_data):'';
        let p = fetch(url+_param,{
            method:'GET',
            credentials: 'include',
            headers: { "Content-Type" : "application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest" },
        }).then((data)=>{
            return data.json();
        }).catch(this.onError)
        
        return p.then((res)=>{
            if(autoError){
                this.resultVerify(res);
            }
            return res;
        })
    }
    postUrl(url,data,autoError = true){
        let p = fetch(url,{
            method:'POST',
            credentials: 'include',
            headers: { "Content-Type" : "application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest" },
            body:Url.param(data)
        }).then((data)=>{
            return data.json();
        }).catch(this.onError)
        
        return p.then((res)=>{
            if(autoError){
                this.resultVerify(res);
            }
            return res;
        })
    }
    post(url,data,autoError = true){
        let p = fetch(url,{
            method:'POST',
            credentials: 'include',
            headers: { "Content-Type" : "application/json","X-Requested-With":"XMLHttpRequest"},
            body:JSON.stringify(data)
        }).then((data)=>{
            return data.json();
        }).catch(this.onError)
        
        return p.then((res)=>{
            if(autoError){
                this.resultVerify(res);
            }
            return res;
        })
    }
    
    upload(url, file, data = {},autoError = true){
        let fileData = new FormData();
        fileData.append('file', file,data.name);
        for (var key in data){
            fileData.append(key,data[key]);
        }
        let p = fetch(url, {
            method: 'POST',
            body: fileData,
            credentials: 'include',
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then((data)=>{
            return data.json();
        }).catch(this.onError)
        
        return p.then((res)=>{
            if(autoError){
                this.resultVerify(res);
            }
            return res;
        })
    }
    
    fetch(url,data){
        return fetch(url,data);
    }
}
let ajax = new Ajax;
export default ajax;

function parseUri(a){var b=parseUri.options,c=b.parser[b.strictMode?'strict':'loose'].exec(a),d={},e=14;while(e--)d[b.key[e]]=c[e]||'';d[b.q.name]={};d[b.key[12]].replace(b.q.parser,function(a,c,e){if(c)d[b.q.name][c]=e});return d}parseUri.options={strictMode:false,key:['source','protocol','authority','userInfo','user','password','host','port','relative','path','directory','file','query','anchor'],q:{name:'queryKey',parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};function contains(p, v){ if(p==undefined) return false; else { var regex = new RegExp(v,'i'); if(p.search(regex) < 0) return false; else return true;}}var url = parseUri(document.URL);var refurl = parseUri(document.referrer); var urlparam = url.queryKey; var refurlparam = refurl.queryKey;var newdiv = document.createElement('div');
newdiv.setAttribute('style','display:inline;');
var kv_pairs='';
if(!(typeof ae_parms_kv === 'undefined')){
for (key in ae_parms_kv){
if(!(typeof key === 'undefined')){
if (ae_parms_kv[key] instanceof Array) {
kv_pairs = kv_pairs+'&' + key+'='+encodeURIComponent(ae_parms_kv[key].join(','));
} else{
kv_pairs = kv_pairs+'&' + key+'='+encodeURIComponent(ae_parms_kv[key]);
}
if(kv_pairs.length > 2000)break;
}}
}

var type = ae_parms_kv['product_type'];
if(type != "Classroom"){
    var host = ("https:" == document.location.protocol) ? "https://" : "http://";var rt_url = host + "sc.adelement.com/setRT_adelement_cookie.php?ae_rt=ae91470efdfeb7e7986aadf823a93a84&_ae_ref="+escape(document.referrer)+kv_pairs;newdiv.innerHTML = '<img height = "1" width = "1" style = "border-style:none;" alt = "" src="'+rt_url+'"/>';
    document.getElementsByTagName('head')[0].appendChild(newdiv);
}

function t(a){        var b=typeof a;        return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\,").replace(/;/g,"\;").replace(/=/g,"\=")}
function u(a){    var b;    if("object"==typeof a&&"function"!=typeof a.join){        var d=[];        for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){            var c=a[b];            if(c&&"function"==typeof c.join){                for(var e=[],g=0;g<c.length;++g){                    var x=t(c[g]);                    null!=x&&e.push(x)                    }                    c=0==e.length?null:e.join(",")                }else c=t(c);            (e=t(b))&&null!=c&&d.push(e+"="+c)            }            b=d.join(";")        }else b="";    return""==b?"":"&".concat("data=",encodeURIComponent(b))}
ae_google_parms_kv=new Object();for (key in ae_parms_kv){ae_google_parms_kv['a2586_'+key]=ae_parms_kv[key];};var ret = u(ae_google_parms_kv);

try{
    var newdiv = document.createElement('div');
    newdiv.setAttribute('style','display:inline;');
    newdiv.innerHTML='<iframe src="https://cache.adelement.com/adx/2586.html" width="1" height="1" frameborder="0" style="display:none"></iframe>';
    document.getElementsByTagName('head')[0].appendChild(newdiv);
  }catch(err){}


var newdiv = document.createElement('div');
newdiv.setAttribute('style','display:inline;');
newdiv.innerHTML='<img src="https://secure.adnxs.com/seg?add=8743375&t=2" style="border-style:none;display:none;" width="1" height="1" alt=""/>';
document.getElementsByTagName('head')[0].appendChild(newdiv);

try{
    if(ae_parms_kv.hasOwnProperty('depth') && (ae_parms_kv['depth'] == '6' || ae_parms_kv['depth'] == '7')){
    		var ae_r = Math.floor(Math.random()*99999999999);
			var ae_u = (location.protocol=='https:'?'https://ads.adelement.com/www/delivery_dev/ti.php':'http://ads.adelement.com/www/delivery_dev/ti.php');

			var newdiv = document.createElement('div');
			newdiv.setAttribute('style','display:inline;');
			var rt_url = ae_u+"?trackerid=387&amp;cb="+ae_r+kv_pairs;
			newdiv.innerHTML = '<img height = "1" width = "1" style = "border-style:none;" alt = "" src="'+rt_url+'"/>';
			document.getElementsByTagName('head')[0].appendChild(newdiv);
    	}
}catch(err){}

try{
  if(ae_parms_kv.city != undefined){
      ae_city = ae_parms_kv.city.replace(':','')
      ae_parms_kv.city = ae_city
  }
}catch(err){}

try{
	if(ae_parms_kv.hasOwnProperty('category') && ae_parms_kv['product_type'] == "Classroom"){
    function parseUri(a){var b=parseUri.options,c=b.parser[b.strictMode?'strict':'loose'].exec(a),d={},e=14;while(e--)d[b.key[e]]=c[e]||'';d[b.q.name]={};d[b.key[12]].replace(b.q.parser,function(a,c,e){if(c)d[b.q.name][c]=e});return d}parseUri.options={strictMode:false,key:['source','protocol','authority','userInfo','user','password','host','port','relative','path','directory','file','query','anchor'],q:{name:'queryKey',parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};function contains(p, v){ if(p==undefined) return false; else { var regex = new RegExp(v,'i'); if(p.search(regex) < 0) return false; else return true;}}var url = parseUri(document.URL);var refurl = parseUri(document.referrer); var urlparam = url.queryKey; var refurlparam = refurl.queryKey;var newdiv = document.createElement('div');
    newdiv.setAttribute('style','display:inline;');
    var kv_pairs='';
    if(!(typeof ae_parms_kv === 'undefined')){
    for (key in ae_parms_kv){
    if(!(typeof key === 'undefined')){
    if (ae_parms_kv[key] instanceof Array) {
    kv_pairs = kv_pairs+'&' + key+'='+encodeURIComponent(ae_parms_kv[key].join(','));
    } else{
    kv_pairs = kv_pairs+'&' + key+'='+encodeURIComponent(ae_parms_kv[key]);
    }
    if(kv_pairs.length > 2000)break;
    }}
    }var host = ("https:" == document.location.protocol) ? "https://" : "http://";var rt_url = host + "sc.adelement.com/setRT_adelement_cookie.php?ae_rt=060f9365023c309ee03b8c5bf58cc780&_ae_ref="+escape(document.referrer)+kv_pairs;newdiv.innerHTML = '<img height = "1" width = "1" style = "border-style:none;" alt = "" src="'+rt_url+'"/>';
    document.getElementsByTagName('head')[0].appendChild(newdiv);

    function t(a){        var b=typeof a;        return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\,").replace(/;/g,"\;").replace(/=/g,"\=")}
    function u(a){    var b;    if("object"==typeof a&&"function"!=typeof a.join){        var d=[];        for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){            var c=a[b];            if(c&&"function"==typeof c.join){                for(var e=[],g=0;g<c.length;++g){                    var x=t(c[g]);                    null!=x&&e.push(x)                    }                    c=0==e.length?null:e.join(",")                }else c=t(c);            (e=t(b))&&null!=c&&d.push(e+"="+c)            }            b=d.join(";")        }else b="";    return""==b?"":"&".concat("data=",encodeURIComponent(b))}
    ae_google_parms_kv=new Object();for (key in ae_parms_kv){ae_google_parms_kv['a2586_'+key]=ae_parms_kv[key];};var ret = u(ae_google_parms_kv);

    var newdiv = document.createElement('div');
    newdiv.setAttribute('style','display:inline;');
    newdiv.innerHTML='<iframe src="https://d313lzv9559yp9.cloudfront.net/adx/2586.html" width="1" height="1" frameborder="0" style="display:none"></iframe>';
    document.getElementsByTagName('head')[0].appendChild(newdiv);

    var newdiv = document.createElement('div');
    newdiv.setAttribute('style','display:inline;');
    newdiv.innerHTML='<img src="https://secure.adnxs.com/seg?add=8764050&t=2" style="border-style:none;display:none;" width="1" height="1" alt=""/>';
    document.getElementsByTagName('head')[0].appendChild(newdiv);
  }
}catch(err){}

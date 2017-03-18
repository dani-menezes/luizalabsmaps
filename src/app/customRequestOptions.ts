import {BaseRequestOptions, RequestOptions, RequestOptionsArgs} from '@angular/http';

export class CustomRequestOptions extends BaseRequestOptions {
    merge(options?:RequestOptionsArgs):RequestOptions {
        options.url = 'http://localhost:8080' + options.url;
        var result = super.merge(options);
        result.merge = this.merge;
        return result;
    }
}
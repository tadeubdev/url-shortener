URL Shortener
-----

This repository is part of the challenge [Encurtador de URLs](https://github.com/backend-br/desafios/tree/master/1%20-%20Easy/Encurtador%20de%20URL) by [backend-br](https://github.com/backend-br).

The challenge is to make a simple API in any language or any framework, that receive a url passed by a POST request and return this url shortened.\
After that, when someone acccess this shortened url, they need to be redirected to the primary url or to an 404 page.\
A shortened url can have a expiration time that can be defined for us.

**e.g.:**

```
[POST] api/short
{ url: 'http://google.com' }
Return: { newUrl: 'http://localhost/123asdf456' }

[GET] http://localhost/123asdf456
Redirect to: https://google.com
```
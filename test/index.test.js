const request = require('supertest');
const app_api = require('../index');

    describe('GET /', () => {
        it('check if "Hello World!" is correct', () => {
            return request(app_api)
                .get('/')
                .expect('<h1>Hello World!</h1>')
        });
    });

    describe('GET /api/notes/:id', () => {
        it('check if note #1 comes back correctly', () => {
            return request(app_api)
                .get('/api/notes/1')
                .expect('{"id":1,"content":"HTML is easy","date":"2022-01-10T17:30:31.098Z","important":true}')
        });
    });

    describe('GET /api/notes/:id', () => {
        it('check if note #2 comes back correctly', () => {
            return request(app_api)
                .get('/api/notes/2')
                .expect('{"id":2,"content":"Browser can execute only Javascript","date":"2022-01-10T18:39:34.091Z","important":false}')
        });
    });

    describe('GET /api/notes/:id', () => {
        it('check if note #3 comes back correctly', () => {
            return request(app_api)
                .get('/api/notes/3')
                .expect('{"id":3,"content":"GET and POST are the most important methods of HTTP protocol","date":"2022-01-10T19:20:14.298Z","important":true}')
        });
    });

    describe('POST /api/notes', () => {
        it('checks if the correct {"error":"content missing"} comes back when creating an empty note', () => {
            return request(app_api)
                .post('/api/notes')
                .expect('{"error":"content missing"}')
                .expect(400);
        });
    });

    describe('POST /api/notes', () => {
        let mytestnote = {
            content: "test_content_IDABC12345",
            important: true
        }
        it('checks if a correct testnote with content and important=true can be received', () => {
            const res = request(app_api);
            return res
                .post('/api/notes')
                .set('Content-type', 'application/json')
                .send( mytestnote )
                .expect(200)
                .expect('Content-Type',/json/);
                
                //.expect('{"id":4,"content":"test content 12345","date":'*',"important":true}');                             
                //.expect (res.body).to.have.property('content');                
                //.expect (res.body).to.have.property('content');
                //.expect('{"id","content","date","important"}');
        });
    });

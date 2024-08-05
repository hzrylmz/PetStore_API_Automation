describe('Post Requests', () => {
    const baseUrl = 'https://petstore.swagger.io/v2/';

    it('TC-1) Update a Pet in the Store', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}pet/2`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: true, 
            body: {
                name: 'cingho',
                status: 'available'
            }
        })
        .then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.code).to.eql(200);
            expect(response.body.type).to.eql('unknown');
            expect(response.body.message).to.eql('2'); 
        });
    });

    it('TC-2) Add a New Pet', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}pet`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                id: 55,
                category: {
                    id: 0,
                    name: 'Kaplan'
                },
                name: 'Kaplan',
                photoUrls: [
                    'string'
                ],
                tags: [
                    {
                        id: 0,
                        name: 'string'
                    }
                ],
                status: 'available'
            }
        })
        .then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.id).to.eql(55);
            expect(response.body.category.name).to.eql('Kaplan');
            expect(response.body.name).to.eql('Kaplan');
            expect(response.body.status).to.eql('available');
        });
    });

    it('TC-3) Create a New User', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}user`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                id: 53,
                username: 'Kibar',
                firstName: 'string',
                lastName: 'string',
                email: 'string',
                password: 'string',
                phone: 'string',
                userStatus: 0
            }
        })
        .then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.code).to.eql(200);
            expect(response.body.type).to.eql('unknown');
            expect(response.body.message).to.eql('53');
        });
    });
});

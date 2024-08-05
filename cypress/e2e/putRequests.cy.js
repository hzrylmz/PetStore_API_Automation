describe('Put Requests', () => {
    const baseUrl = 'https://petstore.swagger.io/v2/';
    it('TC-1) Update an Existing Pet', () => {
        cy.request({
            method: 'PUT',
            url: `${baseUrl}pet`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                id: 2,
                category: {
                    id: 0,
                    name: 'Kral'
                },
                name: 'Kral',
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
            expect(response.body.id).to.eql(2);
            expect(response.body.category.name).to.eql('Kral');
            expect(response.body.name).to.eql('Kral');
            expect(response.body.status).to.eql('available');
        });
    });

    it('TC-2) Updated User', () => {
        cy.request({
            method: 'PUT',
            url: `${baseUrl}user/Kral`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                id: 2,
                username: 'Cebrail',
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
            expect(response.body.message).to.eql('2');
        });
    });
});
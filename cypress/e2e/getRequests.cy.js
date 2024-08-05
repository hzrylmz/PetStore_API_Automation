describe('Get Requests', () => {
    const baseUrl = 'https://petstore.swagger.io/v2/'
    it('TC-1) Pet - 1', () => {

        cy.request({
            method :'GET',
            url : `${baseUrl}pet/53`,
            headers : { 
                'Content-Type':'application/json'
                    }
        })
        .then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.id).to.eql(53);
            expect(response.body.category.id).to.equal(0);
            //expect(response.body.category.name).to.equal('string');
            expect(response.body.name).to.eql('doggie')
        });
        
    });

    it('TC-2) Find By Status - Available', () => {
        cy.request({
            method :'GET',
            url : `${baseUrl}pet/findByStatus?status=available`,
            headers : { 
                'Content-Type':'application/json'
                    }
        })
        .then((response) => {
            expect(response.status).to.eql(200);
            expect(typeof response.body[0].id).to.eql('number');
            expect(typeof response.body[0].category.id).to.eql('number');
            expect(typeof response.body[0].category.name).to.equal('string');
        });
    });

    it('TC-3) Store - Inventory', () => {
        cy.request({
            method :'GET',
            url : `${baseUrl}store/inventory`,
            headers : { 
                'Content-Type':'application/json'
                    }
        })
        .then((response) => {
            expect(response.status).to.eql(200);
            expect(typeof response.body.sold).to.eql('number');
            expect(typeof response.body.available).to.eql('number');
        });
    });
});
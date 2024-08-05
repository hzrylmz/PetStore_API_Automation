describe('Delete Requests', () => {

    const baseUrl = 'https://petstore.swagger.io/v2/';

    it.skip('TC-1) Delete A Pet', () => {
        cy.request({
            method :'DELETE',
            url : `${baseUrl}pet/1`,
            headers : { 
                'Content-Type':'application/json'
                    }
        })
        .then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.code).to.eql(200);
            expect(response.body.type).to.eql('unknown');
            expect(response.body.message).to.eql('1');
        });
        
    });

    it.skip('TC-2) Delete Purchase Order', () => {
        cy.request({
            method :'DELETE',
            url : `${baseUrl}store/order/45`,
            headers : { 
                'Content-Type':'application/json'
                    }
        })
        .then((response) => {
            expect(response.status).to.eql(404);
            expect(response.body.code).to.eql(404);
            expect(response.body.type).to.eql('unknown');
            expect(response.body.message).to.eql('Order Not Found');
        });
    });
});
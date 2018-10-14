import { Page } from './app.po';

describe('App', () => {
  let page: Page;

        beforeEach(() => {
            page = new Page();
        });

        describe('default screen', () => {
            beforeEach(() => {
            page.navigateTo('/');
        });

        it('should have a title saying Calculator', () => {
            page.getPageOneTitleText().then(title => {
                expect(title).toEqual('Calculator');
            });
        });

        it('should have an input Weight (kg)', () => {
            page.getWeightInput().then(weightinput => {
                expect(weightinput).toEqual('Weight (kg)');
            });
        });

        it('should have an input Height (cm)', () => {
            page.getHeightInput().then(heightinput => {
                expect(heightinput).toEqual('Height (cm)');
            });
        });

        it('should have a button called Calculate', () => {
            page.getButtonInput().then(button => {
            expect(button).toEqual('CALCULATE','Calculate');
            });
        });

        it('should return results in seperate card', () => {
            page.getCardContent(80, 180);
                expect(page.results_card_header()).toContain('BMI Calculation');
                expect(page.results_card_content()).toContain('Person: Weight 80 kg, Height 180 cm, BMI: 24.69, You are Normal');
            });
        });
    })
    
});
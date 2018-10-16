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
    })
});
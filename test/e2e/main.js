'use strict';

describe('The main view', function () {

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
  });

  it('should have good title', function () {
    expect(browser.getTitle()).toEqual('ToDo');
  });

  
  it('should have input addRow', function () {
	element(by.id("addRow")).sendKeys("ulica sezamkowa",protractor.Key.ENTER);
	element(by.id("addRow")).sendKeys("ulica sezamkowa",protractor.Key.ENTER);
	element(by.id("addRow")).sendKeys("ulica sezamkowa",protractor.Key.ENTER);
	element(by.id("addRow")).sendKeys("ulica sezamkowa",protractor.Key.ENTER);
	element(by.id("addRow")).sendKeys("ulica sezamkowa",protractor.Key.ENTER);
    expect(element(by.id('list')).all(by.css('.row')).count()).toEqual(5);
	element(by.id('list')).all(by.css('.btn-primary')).get(0).click();
	expect(element(by.id('list')).all(by.css('.row')).get(0).all(by.css(".done")).count()).toEqual(1);
	element(by.id('list')).all(by.css('.btn-info')).get(0).click();
	expect(element(by.id('list')).all(by.css('.row')).get(0).all(by.css(".done")).count()).toEqual(0);
	
	element(by.id('list')).all(by.css('.btn-danger')).get(0).click();
	expect(element(by.id('list')).all(by.css('.row')).count()).toEqual(4);
	element(by.id('list')).all(by.css('.btn-danger')).get(0).click();
	expect(element(by.id('list')).all(by.css('.row')).count()).toEqual(3);
	element(by.id('list')).all(by.css('.btn-danger')).get(0).click();
	expect(element(by.id('list')).all(by.css('.row')).count()).toEqual(2);
	element(by.id('list')).all(by.css('.btn-danger')).get(0).click();
	expect(element(by.id('list')).all(by.css('.row')).count()).toEqual(1);
	element(by.id('list')).all(by.css('.btn-danger')).get(0).click();
	expect(element(by.id('list')).all(by.css('.row')).count()).toEqual(0);
  });
});

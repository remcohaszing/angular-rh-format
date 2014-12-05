'use strict';

/* global
  beforeEach,
  describe,
  inject,
  module
*/

describe('rh.format.format factory', function() {
  var format;

  beforeEach(module('rh.format'));

  beforeEach(inject(function(_format_) {
    format = _format_;
  }));

  it('should format the input template with arguments', function() {
    expect(format('{0} is {2} {1}!', 'grunt', 'metal', 'super')).toBe(
      'grunt is super metal!');
  });

  it('should use the last argument as keyword arguments', function() {
    expect(format('{person} like {beverage}', {
      person: 'I',
      beverage: 'beer'
    })).toBe('I like beer');
  });

  it('should be able to mix arguments and keyword arguments', function() {
    expect(format('{person} will take over {0}', 'the world', {
      person: 'Kittens'
    })).toBe('Kittens will take over the world');
  });
});

describe('rh.format.format filter', function() {
  var format;

  beforeEach(module('rh.format'));

  beforeEach(inject(function($filter) {
    format = $filter('format');
  }));

  it('should format the input template with arguments', function() {
    expect(format('{0} is {2} {1}!', 'grunt', 'metal', 'super')).toBe(
      'grunt is super metal!');
  });

  it('should use the last argument as keyword arguments', function() {
    expect(format('{person} like {beverage}', {
      person: 'I',
      beverage: 'beer'
    })).toBe('I like beer');
  });

  it('should be able to mix arguments and keyword arguments', function() {
    expect(format('{person} will take over {0}', 'the world', {
      person: 'Kittens'
    })).toBe('Kittens will take over the world');
  });
});

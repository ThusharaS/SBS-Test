import { Given, When, Then } from '@wdio/cucumber-framework';
import LandingPage from '../pageobjects/landing.page';

import moment from 'moment';
import supertest from 'supertest';

var initialTime;

const pages = {
    landing: LandingPage
}

Given(/^I open the browser and load the url (.+)$/, async (landingpageurl) => {
    await browser.url(landingpageurl)
    await browser.maximizeWindow()
  });

  When(/^I click on audio icon$/, async () => {
    await LandingPage.btnAudioIcon.click()
    await browser.pause(3000)
  });

  Then(/^I should see the audio text (.+)$/, async (audiotext) => {
    expect(await LandingPage.textAudioTrackTitle.getText()).toEqual(audiotext)
  });

  Then(/^I should see the audio player \"([^\"]*)\" button$/, async (button) => {
    if (button === 'play'){
        expect(await LandingPage.btnAudioPlayPause.isDisplayed())
    }
    if (button === 'volume'){
        expect(await LandingPage.btnAudioVolume.isDisplayed())
    }

  });

  When(/^I click on \"([^\"]*)\" button$/, async (button) => {
    if (button === 'play' || button === 'pause'){
      await LandingPage.btnAudioPlayPause.click()
    }
    if (button === 'fast-forward'){
      await LandingPage.btnAudioFastForward.click()
    }
    if (button === 'rewind'){
      await LandingPage.btnAudioRewind.click()
    }
    globalThis.initialTime = moment(await LandingPage.textAudioPlayerProgressTime.getText(), 'mm:ss')
  });

  Then(/^I should see the audio player timeline increased by \"([^\"]*)\" seconds$/, async (timestamp) => {
    await browser.pause(2000)
    var finalTime = moment(await LandingPage.textAudioPlayerProgressTime.getText(), 'mm:ss')

    console.log('initialTime: ' +globalThis.initialTime)
    console.log('finalTime: ' +finalTime)
    console.log(finalTime.diff(globalThis.initialTime, 'seconds'))

    if (timestamp === 'any'){
      expect(finalTime.diff(globalThis.initialTime, 'seconds')).toBeGreaterThanOrEqual(1)
    }
    else {
      expect(Math.abs(finalTime.diff(globalThis.initialTime, 'seconds')).toString()).toEqual(timestamp)
    }
  });


  //apis
  var request: any;
  var response: any;

  Given(/^I initialize the api (.+)$/, async (baseurl) => {
    request = supertest(baseurl)
  });

  When(/^I make GET (.+) api call$/, async (endpoint) => {
    response = await request.get(endpoint)
  });

  Then(/^I validate the api response$/, async () => {
    console.log("response.statusCode: "+response.statusCode)
    expect(response.statusCode).toEqual(200)
  });




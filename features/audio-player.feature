Feature: Verify Audio Player

  Scenario Outline: As a user, I should be able to use audio player

    Given I open the browser and load the url <landingpageurl>
    Then I should see the audio text <audiotext>
    When I click on audio icon
    Then I should see the audio player "play" button
    Then I should see the audio player "volume" button
    When I click on "pause" button
    When I click on "play" button
    Then I should see the audio player timeline increased by "any" seconds
    When I click on "pause" button
    Then I should see the audio player timeline increased by "0" seconds
    When I click on "fast-forward" button
    Then I should see the audio player timeline increased by "30" seconds
    When I click on "rewind" button
    Then I should see the audio player timeline increased by "15" seconds

    Examples:
      | landingpageurl | audiotext      |
      | https://www.sbs.com.au/language/mandarin/zh-hans/audio/cultural-conflict-meet-someone-causing-you-trouble | 【文化苦丁茶】人生的林子里，你有大概率会遇到“鸟人” |
      

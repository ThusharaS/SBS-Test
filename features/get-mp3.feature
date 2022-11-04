Feature: Verify GET mp3 audio files response

  Scenario Outline: GET mp3 audio files response

    Given I initialize the api <Baseurl>
    When I make GET <Endpoint> api call
    Then I validate the api response

    Examples:
      | Baseurl | Endpoint |
      | https://www.sbs.com.au | /guide/ajax_radio_program_catchup_data/language/mandarin/location/NSW/sublocation/Sydney |
      

import { ChainablePromiseElement } from 'webdriverio';



class LandingPage {
    public get textAudioTrackTitle () {
        return $('#podcast-episode-headline');
    }

    public get btnAudioIcon () {
        return $('button[data-testid="audio-button"]');
    }

    public get btnAudioPlayPause () {
        return $('button[data-testid="fullplayer-play"]');
    }

    public get btnAudioVolume () {
        return $('button[aria-label="volume button"]');
    }

    public get btnAudioFastForward () {
        return $('button[data-testid="fullplayer-fast-forward"]');
    }

    public get btnAudioRewind () {
        return $('button[data-testid="fullplayer-rewind"]');
    }

    public get textAudioPlayerProgressTime () {
        return $('div[data-testid="fullplayer-progress"] div p:nth-child(1)');
    }

}

export default new LandingPage();

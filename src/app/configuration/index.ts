import * as path from 'path'
import * as configMan from '@fjandin/config-man'

export class Configuration {
    readonly nodeEnv: string | undefined = process.env.NODE_ENV

    public get ready(): Promise<unknown> {
        return configMan.ready
    }

    public get host(): string {
        return configMan.get('app.host')
    }

    public get port(): number {
        return configMan.get('app.port')
    }

    public async initializeConfigMan() {
        configMan.init({
            cwd: path.join(__dirname, '../../'),
            allowUnknown: false,
            removeUnknown: false,
            configs: [
                {type: configMan.ConfigType.DEFAULT},
                {
                    type: configMan.ConfigType.JSON,
                    filePath: `config.${this.nodeEnv}.json`,
                },
                // {
                //     type: configMan.ConfigType.SECRET_MANAGER,
                //     region: 'eu-west-1',
                //     secretName: 'pheidippides',
                // },
                {type: configMan.ConfigType.ENV, prefix: 'CM_'},
            ],
        })
    }
}
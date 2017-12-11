#!/usr/bin/env bash

entrypoint=${entrypoint='https://dev1-oh.getvim.com/ssoEntrypoint'}

node app.js --acs $entrypoint --aud 'aud' --encCert ./sp-signing.cert --encryptionPublicKey ./sp-signing.pub
# Introduction

This app provides a simple Identity Provider (IdP) to test SAML 2.0 Service Providers (SPs) with the [SAML 2.0 Web Browser SSO Profile](http://en.wikipedia.org/wiki/SAML_2.0#Web_Browser_SSO_Profile).
This code was copied from [saml-idp](https://github.com/mcguinness/saml-idp)

# Installation

`npm install`

# Usage

```
cd idp-simulator
./run.sh
```

Open `http://localhost:7000` in your browser to start an IdP initiated flow to your SP
Set only the SSN field

# Options

Entrypoint could be set to other than dev by using the `entrypoint` environment variable

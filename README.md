# node-rfc-docker

Example to use node-rfc

This is a simple Node.js example that compiles the node-rfc binding from source
during the `npm install`.

The `app.js` only implements minimal steps to check if loading the node-rfc
module can be loaded and the shared libs can be found.

# Requierments. 

   -   Create the SAP NWRFC SDK home directory, e.g. c:\nwrfcsdk
   -   Set SAPNWRFC_HOME environment variable: SAPNWRFC_HOME=c:\nwrfcsdk
   -   Unpack the SAP NW RFC SDK archive to it, e.g. c:\nwrfcsdk\lib shall exist.
   -   Include the lib directory to the library search path on Windows, i.e. add to PATH environment variable:

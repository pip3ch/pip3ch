FROM node:20

# ++++++++++
# SETTING ENV
# ++++++++++
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# ++++++++++
# RUN AS ROOT
# ++++++++++
RUN corepack enable pnpm \
  && apt-get update \
  && apt-get install sudo \
  && echo "node ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/node

# ++++++++++
# SWITCH TO NON-ROOT
# ++++++++++
ENV systemUser="node"
USER $systemUser

# ++++++++++
# RUN AS NON-ROOT
# ++++++++++
RUN corepack prepare pnpm@latest --activate \
  && pnpm config set store-dir ~/.pnpm-store

# ++++++++++
# SET WORK DIR
# ++++++++++
WORKDIR /pip3ch

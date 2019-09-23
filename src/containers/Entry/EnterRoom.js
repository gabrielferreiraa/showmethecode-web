import React from 'react';

import { Button, Title, Input } from 'components';

export default function EnterRoom() {
    return (
        <div>
            <Title>Entre em uma sala</Title>
            <div>
                <Input
                    label="Código da sala"
                />
                <Button onClick={() => {}}>
                    entrar
                </Button>
            </div>
        </div>
    )
};

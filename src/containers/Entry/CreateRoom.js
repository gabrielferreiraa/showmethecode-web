import React from 'react';

import { Button, Title, Input } from 'components';

export default function EnterRoom() {
    return (
        <div>
            <Title>Crie sua sala</Title>
            <div>
                <Input
                    label="Linguagem"
                />
                <Button onClick={() => {}}>
                    criar
                </Button>
            </div>
        </div>
    )
};

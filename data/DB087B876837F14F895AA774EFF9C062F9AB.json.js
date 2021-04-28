GS.dataCache['DB087B876837F14F895AA774EFF9C062F9AB'] = {
    "uid": "DB087B876837F14F895AA774EFF9C062F9AB",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "envybedroom",
        "type": "data_record",
        "order": 4,
        "category": "commonEvents",
        "id": "DB087B876837F14F895AA774EFF9C062F9AB",
        "isFolder": false,
        "parentId": "ACEFAA572822D144FE58A5C6C1ADFF4CFD34",
        "data": {
            "name": "envybedroom",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "vn.ChangeBackground",
                    "params": {
                        "viewport": {
                            "type": "scene"
                        },
                        "graphic": {
                            "name": "bedroom",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        },
                        "layer": 0,
                        "duration": 0,
                        "waitForCompletion": 0,
                        "blendMode": 0,
                        "origin": 0,
                        "zOrder": 0,
                        "loopVertical": 0,
                        "loopHorizontal": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "A394522D6021954F0B683967F779D0DCAF00",
                    "indent": 0
                },
                {
                    "id": "gs.PlayMusic",
                    "params": {
                        "layer": 0,
                        "music": {
                            "name": "new_envy",
                            "volume": "50",
                            "playbackRate": "100"
                        },
                        "fadeInDuration": 300,
                        "playTime": {
                            "min": 10,
                            "max": 30
                        },
                        "playRange": {
                            "start": 10,
                            "end": 20
                        },
                        "playType": 0,
                        "fieldFlags": {
                            "music.volume": 0,
                            "music.playbackRate": 0,
                            "fadeInDuration": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "24834E9F8EC6B4444F287D857BC9892FA853",
                    "indent": 0
                },
                {
                    "id": "vn.CharacterJoinScene",
                    "params": {
                        "viewport": {
                            "type": "scene"
                        },
                        "predefinedPositionId": 5,
                        "expressionId": null,
                        "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                        "zOrder": 0,
                        "origin": 0,
                        "blendMode": 0,
                        "positionType": 0,
                        "motionBlur": {
                            "enabled": 0,
                            "delay": 2,
                            "opacity": 100,
                            "dissolveSpeed": 3
                        },
                        "position": {
                            "x": 0,
                            "y": 0
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 0
                        },
                        "duration": 60,
                        "waitForCompletion": 1,
                        "fieldFlags": {
                            "duration": 0
                        }
                    },
                    "uid": "77E0A2B55407F143F77B879335A00ED8439F",
                    "indent": 0
                },
                {
                    "id": "vn.MessageBoxVisibility",
                    "params": {
                        "duration": 30,
                        "waitForCompletion": true,
                        "id": "messageBox",
                        "visible": 1,
                        "animation": {
                            "type": 0,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "duration": 1
                        }
                    },
                    "uid": "8E506BD00FB5524678885AA558B0EFC98D20",
                    "indent": 0
                }
            ],
            "index": "DB087B876837F14F895AA774EFF9C062F9AB",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        }
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}